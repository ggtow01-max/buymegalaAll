const express = require("express")
const Dashboard = require("./componets/dashboard")
const ApprovePayouts = require("./componets/approvePayouts")
const GetUserTransactions = require("./componets/getUserTransactions")
const authAdminMiddleWare = require("../authAdminMiddleWare")

const route = express.Router()

route.get("/dashboard", authAdminMiddleWare, Dashboard)
route.post("/approve-payout", authAdminMiddleWare, ApprovePayouts)
route.post("/user-transactions", authAdminMiddleWare, GetUserTransactions)

module.exports = route