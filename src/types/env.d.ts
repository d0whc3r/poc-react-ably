declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      ABLY_API_KEY: string
    }
  }
}

export {}
