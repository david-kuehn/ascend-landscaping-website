interface PricingProps {
	pricingSheet: Object
}

export default function Pricing({ pricingSheet }: PricingProps) {
	return (
		<div className="flex flex-col items-center w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 text-black text-center">
			<h2 className="font-medium text-3xl mb-4">Pricing</h2>
			<div className="grid grid-cols-1 gap-3">
			{ Object.entries(pricingSheet).map(([key, value]) => 
				<div key={key}
					className="h-32 rounded-xl overflow-clip items-center border-2 border-gray"
					style={{
						display: "grid",
						gridTemplateRows: "2rem 1fr",
					}}
				>
					<span className="font-medium">{key}</span>
					<div className="bg-ascendblue h-full flex justify-center items-center px-3">
						<span className="text-white text-4xl font-medium">{value}</span>
					</div>
				</div>
			)}
			</div>
		</div>
	)
}