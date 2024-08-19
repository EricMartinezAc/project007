export const destroyAllCookies = (cookies: any, data: string[]) => {
  if (!cookies || !data || data.length < 1) throw new Error("sin datos");

  data.forEach((cookieName) => {
    cookies.remove(cookieName);
  });

  console.log("Todas las cookies han sido eliminadas.");
};
