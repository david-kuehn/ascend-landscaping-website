"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ascendLogo from "../../public/ascend-logo-v3.png";

export default function PopupOverlay() {
	const [isShown, setIsShown] = useState<boolean>(true);

	function dismissPopup() {
		setIsShown(false);
		document.body.style.overflow = "scroll";
	}

	function scrollToForm() {
		dismissPopup();
		document.getElementById("quote-form-container")?.scrollIntoView(true);
	}

	useEffect(() => {
		document.body.style.overflow = "hidden";
	}, []);

  return (
		<div className={`z-20 fixed top-0 left-0 w-full h-full bg-gray-800/95 flex flex-col items-center justify-center gap-6 text-center ${isShown ? "" : "hidden"}`} onClick={dismissPopup}>
			<div className="z-30 fixed top-0 left-0 w-full h-[1px] bg-white" />
			<Image
				src={ascendLogo}
				alt=""
				className="h-24"
				style={{objectFit: "contain"}}
			/>
			<h1 className="font-bold text-4xl text-ascendblue w-full px-2">SPRING STARTUP</h1>
			<p className="mx-6">Get ahead of the game and schedule a Spring Startup / Activation for your irrigation system today!</p>
			<div className="bg-ascendblue rounded-lg px-3 py-2 drop-shadow-xl font-medium">PROCEED TO SITE</div>
			<div className="bg-ascendblue rounded-lg px-3 py-2 drop-shadow-xl font-medium" onClick={scrollToForm}>FILL OUT FORM</div>
		</div>
  )
}