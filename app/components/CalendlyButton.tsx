'use client'

import { PopupButton } from "react-calendly";

export default function CalendlyButton() {
  return (
		<div className="fixed bottom-2 right-0 bg-ascendblue/90 p-2 rounded-l-xl cursor-pointer">
			<PopupButton
				url="https://calendly.com/ascend-design1"
				rootElement={document.getElementById("root-body")}
				text="Schedule Now!"
			/>
		</div>
  )
}
