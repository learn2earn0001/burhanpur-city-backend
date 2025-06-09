// const crypto = require("crypto");
// const PlanPurchase = require("../models/PlanPurchase"); // Create this model
// const BusinessModel = require("../models/Bussiness"); // Connect plan to this

// const razorpay = require("../config/razorpayInstance");
// const { errorResponse } = require("../helper/successAndError");
// const PlanModel = require("../models/Plan");

// module.exports.createOrderForPlan = async (req, res) => {
//   try {
//     const { planId, businessId } = req.body;

//     const plan = await PlanModel.findById(planId);
//     if (!plan) return res.status(404).json(errorResponse(404, "Plan not found"));

//     const amountInPaise = plan.offerPrice ? plan.offerPrice * 100 : plan.price * 100;

//     const options = {
//       amount: amountInPaise,
//       currency: "INR",
//       receipt: `receipt_plan_${Date.now()}`,
//       notes:{planId, businessId} // You can pass additional data here
//     };

//     const order = await razorpay.orders.create(options);

//     res.status(200).json({
//       success: true,
//       orderId: order.id,
//       plan,
//       businessId
//     });

//   } catch (err) {
//     res.status(500).json(errorResponse(500, "Failed to create order", err.message));
//   }
// };



// module.exports.verifyPaymentAndActivatePlan = async (req, res) => {
//   const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

//   const expectedSignature = crypto
//     .createHmac("sha256", secret)
//     .update(JSON.stringify(req.body))
//     .digest("hex");

//   const razorpaySignature = req.headers["x-razorpay-signature"];

//   if (expectedSignature !== razorpaySignature) {
//     return res.status(400).json({ success: false, message: "Invalid signature" });
//   }

//   const event = req.body.event;

//   if (event === "payment.captured") {
//     const paymentEntity = req.body.payload.payment.entity;
//     const { notes } = paymentEntity; // You can pass planId & businessId in notes from frontend

//     const plan = await PlanModel.findById(notes.planId);
//     const validityMonths = parseInt(plan.validity.split(" ")[0]); // "1 Month" => 1

//     const startDate = new Date();
//     const endDate = new Date();
//     endDate.setMonth(endDate.getMonth() + validityMonths);

//     const planPurchase = await PlanPurchase.create({
//       business: notes.businessId,
//       plan: notes.planId,
//       razorpayPaymentId: paymentEntity.id,
//       startDate,
//       endDate,
//       isActive: true
//     });

//     return res.status(200).json({ success: true, message: "Plan activated", planPurchase });
//   }

//   return res.status(200).json({ success: true });
// };
