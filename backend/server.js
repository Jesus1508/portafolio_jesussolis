require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const chatRoutes = require("./routes/chat");

const app = express();

const PROD_ORIGIN = "https://www.jesussolismartinez.info";

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      const isLocalhost = !origin || /^http:\/\/localhost:\d+$/.test(origin);
      const isConfiguredFrontend = origin && origin === process.env.FRONTEND_URL;
      const isProdOrigin = origin === PROD_ORIGIN;
      if (isLocalhost || isConfiguredFrontend || isProdOrigin) {
        return callback(null, true);
      }
      callback(new Error("No permitido por CORS"));
    },
  })
);
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Demasiadas solicitudes. Intenta de nuevo en unos minutos.",
  },
});
app.use("/api", apiLimiter);

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Portafolio Assistant API funcionando" });
});

app.use("/api/chat", chatRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, message: err.message || "Error interno del servidor" });
});

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Servidor de Portafolio Assistant corriendo en el puerto ${PORT}`);
});
