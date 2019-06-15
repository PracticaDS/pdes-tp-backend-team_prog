
class Logger {
  log = (type, msg, any) => {

    const message = `${new Date()} - [${type}] - ${msg} - ${any}`

    console.log(message)
  }

  debug = (message, any) => {
    this.log("DEBUG", message, any)
  }

  warn = (message, any) => {
    this.log("WARN", message, any)
  }

  error = (message, any) => {
    this.log("ERROR", message, any)
  }

  info = (message, any) => {
    this.log("INFO", message, any)
  }

}

export default Logger
