export const paths = {
    src: "src",
    dist: "dist",
    tests: "__tests__",
  }
  
  export const environment = {
    isProd: process.env.NODE_ENV === "production",
    isDev: process.env.NODE_ENV === "development",
  }
  