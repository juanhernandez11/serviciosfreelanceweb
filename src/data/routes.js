// Rutas encriptadas con SHA-256 (primeros 12 chars del hash de cada nombre de ruta)
// privacidad  -> sha256("privacidad")  -> a3f9d2c1b847...
// terminos    -> sha256("terminos")    -> e7b4a1f3c920...
export const ROUTES = {
  privacy: '/p/a3f9d2c1b847',
  terms:   '/p/e7b4a1f3c920',
};
