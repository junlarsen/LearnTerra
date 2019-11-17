import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

export function navigation() {
  const middleware: Middleware = ({ getState}: MiddlewareAPI) => (
    next: Dispatch
  ) => (action: any) => {
    const { limit } = getState().app

    if (action.frame < 1 || action.frame > limit) {
      return
    }

    return next(action)
  }

  return middleware
}