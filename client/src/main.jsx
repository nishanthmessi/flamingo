import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/user"
import profileReducer from "./features/profileId"
import postReducer from "./features/post"

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    post: postReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
