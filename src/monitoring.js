import Prometheus from 'prom-client'
import ResponseTime from 'response-time'

export const startCollection = () => {
    console.log("LOG_INFO", `Starting the collection of metrics, the metrics are available on /metrics`)
    const metricsInterval = Prometheus.collectDefaultMetrics()
}

const numOfRequests = new Prometheus.Counter({
  name: 'numOfRequests',
  help: 'Number of requests made',
  labelNames: ['method']
})
  
const pathsTaken = new Prometheus.Counter({
  name: 'pathsTaken',
  help: 'Paths taken in the app',
  labelNames: ['path']
})

export const requestCounters = (req, res, next) => {
  if (req.path != '/metrics') {
    numOfRequests.inc({ method: req.method })
    pathsTaken.inc({ path: req.path })
  }
  next()
}

const responses = new Prometheus.Summary({
  name: 'responses',
  help: 'Response time in millis',
  labelNames: ['method', 'path', 'status']
})

export const responseCounters = ResponseTime((req, res, time) => {
  if(req.url != '/metrics') {
    responses.labels(req.method, req.url, res.statusCode).observe(time)
  }
})

export const injectMetricsRoute = (App) => {
  App.get('/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType)
    res.end(Prometheus.register.metrics())
  })
}
