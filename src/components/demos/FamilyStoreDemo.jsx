import { useState } from "react";
import { FaStar, FaTrashAlt, FaBell, FaTshirt, FaShoePrints, FaShoppingBag, FaSprayCan } from "react-icons/fa";

const COSTO_ENVIO = 60;

const initialProducts = [
  {
    id: 1,
    nombre: "Bolsa Michael Kors",
    precio: 1200,
    precioOriginal: 1500,
    stock: 3,
    reservado: 0,
    rating: 4.5,
    resenas: 12,
    icon: FaShoppingBag,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    id: 2,
    nombre: "Tenis DKNY",
    precio: 950,
    precioOriginal: null,
    stock: 1,
    reservado: 0,
    rating: 5,
    resenas: 3,
    icon: FaShoePrints,
    color: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
  {
    id: 3,
    nombre: "Perfume Calvin Klein",
    precio: 680,
    precioOriginal: null,
    stock: 0,
    reservado: 0,
    rating: 4,
    resenas: 8,
    icon: FaSprayCan,
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
  {
    id: 4,
    nombre: "Playera Tommy Hilfiger",
    precio: 450,
    precioOriginal: null,
    stock: 5,
    reservado: 0,
    rating: 0,
    resenas: 0,
    icon: FaTshirt,
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  },
];

const currency = (n) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(n);

const Stars = ({ rating }) => (
  <div className="flex text-amber-400 text-xs">
    {Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < Math.round(rating) ? "" : "text-slate-200 dark:text-slate-600"} />
    ))}
  </div>
);

const FamilyStoreDemo = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [envio, setEnvio] = useState(false);
  const [notifCount, setNotifCount] = useState(0);
  const [ultimaVenta, setUltimaVenta] = useState(null);

  const disponible = (p) => p.stock - p.reservado;

  const agregarAlCarrito = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, reservado: p.reservado + 1 } : p))
    );
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i));
      return [...prev, { id, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, reservado: Math.max(0, p.reservado - item.cantidad) } : p))
    );
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const total =
    cart.reduce((sum, item) => {
      const p = products.find((prod) => prod.id === item.id);
      return sum + (p ? p.precio * item.cantidad : 0);
    }, 0) + (envio && cart.length > 0 ? COSTO_ENVIO : 0);

  const confirmarPedido = () => {
    if (cart.length === 0) return;
    setProducts((prev) =>
      prev.map((p) => {
        const item = cart.find((i) => i.id === p.id);
        if (!item) return p;
        return { ...p, stock: p.stock - item.cantidad, reservado: p.reservado - item.cantidad };
      })
    );
    setUltimaVenta(total);
    setNotifCount((n) => n + 1);
    setCart([]);
    setEnvio(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
          Storefront con datos de ejemplo, inspirado en la tienda real que desarrollé (catálogo, carrito con reserva de stock, envío opcional y notificaciones de venta para el admin).
        </p>
        <div className="relative flex-shrink-0 ml-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
            <FaBell />
          </div>
          {notifCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {notifCount}
            </span>
          )}
        </div>
      </div>

      {ultimaVenta !== null && (
        <div className="mb-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm rounded-lg px-4 py-2">
          🛎️ Nueva venta registrada — {currency(ultimaVenta)}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {products.map((p) => {
          const Icon = p.icon;
          const disp = disponible(p);
          return (
            <div
              key={p.id}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-3 flex flex-col"
            >
              <div className={`w-full aspect-square rounded-md flex items-center justify-center mb-2 ${p.color}`}>
                <Icon className="text-2xl" />
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-200 line-clamp-2 min-h-[2rem]">
                {p.nombre}
              </p>
              {p.resenas > 0 && (
                <div className="flex items-center gap-1 mt-0.5">
                  <Stars rating={p.rating} />
                  <span className="text-[10px] text-slate-400">({p.resenas})</span>
                </div>
              )}
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{currency(p.precio)}</span>
                {p.precioOriginal && (
                  <span className="text-[10px] text-slate-400 line-through">{currency(p.precioOriginal)}</span>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mb-2">
                {disp > 0 ? `${disp} disponibles` : "Agotado"}
              </p>
              <button
                onClick={() => agregarAlCarrito(p.id)}
                disabled={disp <= 0}
                className="mt-auto text-xs font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-700 text-white rounded-md py-1.5 transition-colors"
              >
                {disp > 0 ? "Agregar" : "Sin stock"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Carrito</h4>
        {cart.length === 0 ? (
          <p className="text-xs text-slate-400 dark:text-slate-500">Agrega productos para ver el resumen del pedido.</p>
        ) : (
          <div className="space-y-2 mb-3">
            {cart.map((item) => {
              const p = products.find((prod) => prod.id === item.id);
              return (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">
                    {p.nombre} × {item.cantidad}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      {currency(p.precio * item.cantidad)}
                    </span>
                    <button
                      onClick={() => quitarDelCarrito(item.id)}
                      className="text-slate-400 hover:text-red-500"
                      aria-label="Quitar"
                    >
                      <FaTrashAlt className="text-xs" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mb-3">
          <input type="checkbox" checked={envio} onChange={(e) => setEnvio(e.target.checked)} />
          Envío a domicilio (+{currency(COSTO_ENVIO)})
        </label>

        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-600 pt-3">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Total: {currency(total)}</span>
          <button
            onClick={confirmarPedido}
            disabled={cart.length === 0}
            className="text-xs font-semibold bg-orange-500 hover:bg-orange-600 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-600 text-white rounded-md px-4 py-2 transition-colors"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyStoreDemo;
