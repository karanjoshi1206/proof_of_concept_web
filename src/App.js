import { useState } from "react";
import "./App.css";

function App() {
	const [showModal, setShowModal] = useState(false);
	// console.log(showModal);
	return (
		<div className='App '>
			{showModal && <div className='overlay'></div>}
			<div className={`modal ${showModal ? "show" : ""}`}>
				<h1>Select a delivery option</h1>
				<div className='content'>
					<div className='deliveryOption'>
						<h3>Deliver now | ₹ 35</h3>
						<input type='checkbox' name='deliver' id='deliver' />
					</div>
					<div className='deliveryOption'>
						<h3>Deliver later | ₹ 15</h3>
						<input type='checkbox' name='deliver' id='deliver' />
					</div>
				</div>
				<div className='subTotal'>
					<p>Sub Total</p>
					<p>₹ 85</p>
				</div>
				<div className='subTotal'>
					<p>Delivery partner fee</p>
					<p>₹ 15</p>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "20px 0",
					}}>
					<button
						style={{
							backgroundColor: "#60b246",
							outline: "none",
							border: "none",
							padding: 15,
							paddingRight: 30,
							paddingLeft: 30,
							color: "white",
							fontSize: 17,
							borderRadius: 10,
							cursor: "pointer",
						}}>
						Make Payment | 110
					</button>
				</div>
				<div
					onClick={() => setShowModal(false)}
					className='hide fa-solid fa-circle-xmark'></div>
			</div>
			<a onClick={() => setShowModal(true)} className='btn' href='#'>
				Show Modal
			</a>
		</div>
	);
}

export default App;
