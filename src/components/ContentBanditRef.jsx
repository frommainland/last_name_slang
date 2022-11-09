import React from 'react'

export const ContentBanditRef = () => {
	function Item() {
		return (
			<div className="ref-wrap">
				<div className="content">
					<div className="mask"></div>
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 164 36"
					>
						<path
							d="M6.236 8.914h9.34c.602-.88.934-1.367.996-1.46.077-.092.193-.139.347-.139.17 0 .65.255 1.437.765.804.51 1.26.827 1.367.95.109.108.163.217.163.325 0 .216-.247.425-.742.625v2.457c0 .602.008 1.12.023 1.553.031.417.047.664.047.741 0 .062-.039.132-.116.209-.078.062-.255.139-.533.232-.263.092-.657.185-1.182.278-.525.092-.873.139-1.043.139-.17 0-.255-.109-.255-.325v-.88H13.35c-.092.17-.262.293-.51.37-.03 1.16.07 2.233.302 3.222h4.287c.247-.433.487-.835.719-1.206.231-.37.386-.594.463-.671.077-.093.162-.14.255-.14.294 0 .912.371 1.854 1.113.958.726 1.437 1.213 1.437 1.46 0 .139-.155.208-.464.208h-8.366c.417 1.375.99 2.534 1.715 3.477.726.927 1.491 1.614 2.295 2.062.803.448 1.36.672 1.668.672.309 0 .549-.085.719-.255.17-.17.386-.587.648-1.251.279-.68.526-1.422.742-2.225.077-.278.139-.417.185-.417.062 0 .093.116.093.348l-.07 1.946c0 .742.07 1.329.21 1.761.154.418.494.935 1.019 1.553.17.201.255.471.255.811 0 .34-.178.634-.533.88-.34.264-.804.395-1.39.395-1.345 0-2.728-.402-4.15-1.205-1.42-.804-2.695-1.955-3.823-3.453a13.403 13.403 0 0 1-2.294-5.099H5.749v5.47c1.792-.402 3.206-.742 4.241-1.02 1.035-.278 1.584-.417 1.646-.417.077 0 .115.023.115.07 0 .046-.077.115-.231.208-1.607.958-2.944 1.815-4.01 2.572a50.064 50.064 0 0 0-3.383 2.596c-.14.108-.263.162-.37.162a.417.417 0 0 1-.256-.07c-.062-.03-.224-.278-.486-.741a63.575 63.575 0 0 1-.765-1.483c-.247-.541-.371-.858-.371-.95 0-.155.131-.286.394-.394.278-.124.471-.248.58-.371.107-.124.162-.302.162-.533V9.702c0-.788-.024-1.514-.07-2.178 1.159.2 2.256.664 3.29 1.39Zm9.85 4.705v-3.94H6.374c-.016.34-.224.564-.626.672v3.268h10.336Zm-6.119.765H5.749v3.592h4.705a48.75 48.75 0 0 1-.487-3.592ZM28.321 8.89h12.491c.201-.448.371-.795.51-1.043.155-.262.255-.417.301-.463a.339.339 0 0 1 .209-.07c.124 0 .587.232 1.39.696.82.463 1.337.795 1.553.996.217.185.325.355.325.51 0 .154-.217.324-.65.51v15.225c0 .727.008 1.229.024 1.507l.023.788c0 .139-.054.247-.162.324-.108.077-.479.17-1.113.278-.617.124-1.089.186-1.413.186-.14 0-.209-.132-.209-.394v-1.46H28.228v1.182a.62.62 0 0 1-.046.231c-.015.093-.216.194-.602.302-.371.123-.796.231-1.275.324-.479.108-.765.162-.857.162-.078 0-.116-.061-.116-.185l.046-1.09c.031-.756.046-1.444.046-2.062V9.911c0-.804-.015-1.514-.046-2.132 1.205.37 2.186.741 2.943 1.112Zm4.751 4.102h-2.619c-.309 0-.587.085-.834.255l-.602-1.09c.37.047.756.07 1.158.07h6.976c.324-.587.571-.989.741-1.205.186-.232.332-.347.44-.347.17 0 .61.309 1.322.927.726.602 1.089.988 1.089 1.158 0 .155-.14.232-.417.232H36.2a.812.812 0 0 1-.464.37v3.315h1.275c.479-.804.757-1.26.834-1.368.077-.108.17-.162.278-.162.232 0 .71.302 1.437.904.742.603 1.112.989 1.112 1.159 0 .154-.139.232-.417.232h-4.519v5.214h2.387l.464-.834c-.927.077-1.414-.325-1.46-1.206-.016-.571-.116-1.058-.302-1.46-.17-.401-.34-.617-.51-.648-.17-.031-.254-.078-.254-.14 0-.061.139-.092.417-.092.278 0 .718.077 1.32.232.619.154 1.051.324 1.298.51.263.17.433.355.51.556.078.2.116.479.116.834s-.085.649-.255.88c.865.541 1.576 1.082 2.132 1.623V9.656H28.576c-.015.124-.131.232-.348.324v15.736H41.6v-2.294H29.781c-.309 0-.587.085-.834.255l-.603-1.09c.371.047.758.07 1.16.07h3.568v-5.214h-2.48c-.309 0-.587.085-.834.255l-.602-1.09c.37.047.757.07 1.158.07h2.758v-3.685Zm22.873.394c.294.03.626.046.997.046h5.33V9.262c0-.773-.015-1.46-.046-2.063 1.715.14 2.719.255 3.012.348.294.093.44.224.44.394 0 .155-.2.294-.602.417v5.075h.162c.34-.71.58-1.174.719-1.39.139-.216.278-.324.417-.324.154 0 .61.324 1.367.973s1.136 1.066 1.136 1.251c0 .17-.147.255-.44.255h-3.36v11.425c0 .695-.032 1.205-.093 1.53-.062.34-.21.61-.44.81-.217.202-.642.387-1.275.557-.634.17-1.105.255-1.414.255-.37 0-.58-.193-.626-.58-.046-.386-.123-.702-.232-.95-.092-.247-.3-.47-.625-.672-.325-.185-.804-.316-1.437-.394-.216-.015-.325-.07-.325-.162 0-.108.116-.162.348-.162l1.414.046c.587 0 1.012-.03 1.274-.092.278-.078.448-.186.51-.325.077-.139.116-.34.116-.602V14.198H57.22c-.309 0-.587.085-.834.255l-.44-.788v8.32c0 .726.007 1.228.023 1.506l.023.765a.75.75 0 0 1-.14.463c-.092.124-.347.248-.764.371a4.735 4.735 0 0 1-1.39.186c-.109 0-.21-.055-.302-.163a.713.713 0 0 1-.139-.44v-1.228h-2.595v1.784a.678.678 0 0 1-.14.417c-.092.109-.332.224-.718.348-.37.124-.726.185-1.066.185-.54 0-.811-.139-.811-.417l.046-1.089c.031-.757.047-1.444.047-2.063v-11.1c0-.942-.016-1.746-.047-2.41 1.02.355 1.885.703 2.596 1.043h2.317c.387-.65.634-1.043.742-1.182.108-.155.216-.232.324-.232.124 0 .487.193 1.09.58.618.37 1.058.664 1.32.88.263.216.395.402.395.556 0 .14-.27.332-.812.58v2.062Zm-5.283 2.92h2.595v-5.4H51.08c-.031.201-.17.34-.417.418v4.982Zm2.595.765h-2.595v5.608h2.595v-5.608Zm4.056-1.275c.417 0 .904.108 1.46.325.571.216 1.05.479 1.436.788.387.309.665.618.835.927.185.309.278.695.278 1.158 0 .448-.17.858-.51 1.229-.324.37-.726.556-1.205.556-.479 0-.834-.147-1.066-.44a1.497 1.497 0 0 1-.255-1.067c.046-.401.07-.718.07-.95a2.75 2.75 0 0 0-.974-2.155c-.154-.14-.231-.232-.231-.278 0-.062.053-.093.162-.093Zm26.395-5.052V7.987c.943.232 1.932.618 2.967 1.16h1.9l.719-1.136c.092-.155.193-.232.3-.232.186 0 .712.293 1.577.88.865.572 1.297.958 1.297 1.16 0 .185-.3.409-.903.671v15.504c0 .664-.07 1.143-.209 1.437a1.44 1.44 0 0 1-.649.672c-.293.154-.695.286-1.205.394-.494.123-.834.185-1.02.185-.401 0-.617-.185-.648-.556-.016-.37-.062-.657-.14-.857-.077-.186-.254-.363-.532-.533-.279-.17-.65-.317-1.113-.44-.463-.124-.695-.21-.695-.256 0-.061.147-.092.44-.092h.533c.85 0 1.476-.07 1.877-.209.418-.139.626-.417.626-.834v-4.96h-2.873c-.186 2.04-.688 3.639-1.507 4.798-.819 1.143-1.931 2.093-3.337 2.85-1.406.757-2.24 1.136-2.503 1.136-.077 0-.116-.031-.116-.093s.1-.155.302-.278c1.776-1.19 2.935-2.325 3.476-3.407.556-1.097.911-2.402 1.066-3.916h-10.87c-.308 0-.586.085-.833.255l-.603-1.09c.37.047.757.07 1.159.07h1.483v-8.876h-.904c-.309 0-.587.085-.834.255l-.603-1.09c.371.047.757.07 1.159.07h1.182V9.262c0-.773-.016-1.46-.046-2.063 1.56.109 2.456.201 2.688.279.232.077.347.177.347.3 0 .217-.17.372-.51.464v2.387h2.828V9.355c0-.773-.015-1.46-.046-2.063.648.031 1.274.085 1.877.162.602.062.965.14 1.089.232.124.077.185.162.185.255 0 .2-.177.363-.533.487v2.039c.263-.433.425-.695.487-.788.062-.093.131-.139.209-.139.216 0 .703.402 1.46 1.205Zm2.55 3.523h2.572V9.91h-2.387c-.062.093-.093.224-.093.394l-.023 1.692-.07 2.27Zm-4.705-2.874v8.39c.294-.526.487-.789.58-.789.17 0 .602.371 1.297 1.113.14-1.175.232-4.08.278-8.714h-2.155Zm-5.4 0v2.457h2.828v-2.457h-2.827Zm2.828 5.632v-2.41h-2.827v2.41h2.827Zm9.85-1.994h-2.62a140.512 140.512 0 0 1-.208 4.149h2.827v-4.149Zm-9.85 5.238v-2.48h-2.827v2.48h2.827Zm-1.367 1.344c.293 0 .903.193 1.83.58.943.386 1.569.803 1.878 1.25.309.433.463.882.463 1.345 0 .448-.154.803-.463 1.066-.294.263-.603.394-.927.394-.325 0-.603-.124-.835-.37-.216-.264-.34-.642-.37-1.136-.031-.495-.178-.997-.44-1.507-.263-.51-.542-.873-.835-1.089-.294-.232-.44-.378-.44-.44s.046-.093.139-.093Zm-3.291.093c.68.324 1.267.64 1.761.95.51.309.827.517.95.626.124.108.186.208.186.3 0 .202-.178.318-.533.349-.155.015-.34.108-.556.278-.217.154-.642.517-1.275 1.089-.634.556-1.46 1.159-2.48 1.807-1.02.665-1.614.997-1.784.997-.031 0-.047-.016-.047-.046 0-.062.085-.186.255-.371 1.854-1.962 3.028-3.955 3.523-5.98Zm31.239-5.47c-.123.062-.409.317-.857.765s-.695.672-.742.672c-.046 0-.069-.023-.069-.07 0-.061.046-.177.139-.347 1.344-2.456 2.163-5.848 2.456-10.173.896.2 1.723.424 2.48.672.772.247 1.213.417 1.321.51.123.077.185.177.185.3 0 .109-.154.202-.463.279-.294.077-.51.278-.649.602l-1.298 2.85h3.407c.432-.926.78-1.39 1.043-1.39.17 0 .54.186 1.112.557.572.37 1.043.695 1.414.973.37.278.556.525.556.742 0 .2-.34.386-1.02.556a199.345 199.345 0 0 1-.185 7.23c-.093 2.503-.224 4.117-.394 4.844-.155.71-.448 1.251-.881 1.622-.432.386-.989.626-1.668.718-.68.108-1.175.162-1.484.162-.293 0-.486-.046-.579-.139-.093-.077-.162-.316-.209-.718-.03-.402-.231-.757-.602-1.066-.371-.309-.935-.556-1.692-.742-.293-.077-.44-.139-.44-.185 0-.062.116-.093.347-.093l1.646.024c.942 0 1.614-.07 2.016-.21.402-.138.672-.424.811-.856.155-.433.286-1.746.394-3.94.108-2.21.162-4.65.162-7.323h-4.148c-.649 1.158-1.336 2.155-2.062 2.99 1.405.385 2.464.841 3.174 1.366.711.526 1.067 1.113 1.067 1.762s-.163 1.15-.487 1.506c-.309.355-.711.533-1.205.533-.495 0-.819-.1-.974-.301-.154-.216-.231-.68-.231-1.39 0-1.654-.464-2.75-1.391-3.291Zm-7.717-3.87c.093-.942.14-1.807.14-2.595 0-.804-.032-1.638-.094-2.503.788.077 1.553.178 2.295.301.757.124 1.228.224 1.413.301.186.078.278.17.278.279 0 .092-.131.2-.394.324-.262.108-.548.394-.857.857-.294.464-.827 1.476-1.599 3.036h1.993c.201-.432.378-.749.533-.95.154-.2.309-.301.463-.301.17 0 .649.255 1.437.765.804.51 1.205.873 1.205 1.089 0 .2-.285.37-.857.51v9.895c0 .726.008 1.236.023 1.53l.023.788c0 .2-.069.347-.208.44-.124.093-.371.2-.742.325-.355.123-.772.185-1.251.185-.263 0-.394-.178-.394-.533v-1.113h-3.685v1.391a.49.49 0 0 1-.162.394c-.108.108-.356.209-.742.301-.386.093-.75.14-1.09.14-.339 0-.532-.024-.578-.07-.031-.047-.047-.132-.047-.255l.047-1.09c.03-.756.046-1.444.046-2.062V13.92c0-.942-.016-1.746-.046-2.41.85.2 1.753.487 2.711.857h.14Zm-.278 5.47h3.685v-4.705h-3.221c-.062.34-.217.564-.464.672v4.033Zm3.685.764h-3.685v5.632h3.685V18.6Zm24.797-2.109h-6.327c-.309 0-.587.085-.834.255l-.603-1.089c.371.046.757.07 1.159.07h6.605V9.262c0-.773-.016-1.46-.047-2.063.819.078 1.576.178 2.271.302.711.108 1.128.208 1.252.301.139.093.208.193.208.301 0 .201-.208.356-.625.464v7.16h3.568c.309-.602.572-1.073.788-1.413.232-.355.387-.572.464-.649.077-.093.154-.139.232-.139.231 0 .826.402 1.784 1.205.973.788 1.46 1.306 1.46 1.553 0 .139-.139.208-.417.208h-7.879v10.22h4.75c.387-.68.696-1.181.927-1.506.232-.324.402-.556.51-.695.108-.14.217-.209.325-.209.247 0 .888.44 1.923 1.321 1.035.865 1.553 1.414 1.553 1.646 0 .139-.147.208-.44.208H118.03c-.309 0-.587.085-.834.255l-.603-1.09c.371.047.757.07 1.159.07h8.297v-10.22Zm18.354-7.717h12.213c.371-.772.633-1.259.788-1.46.154-.216.286-.324.394-.324.17 0 .695.347 1.576 1.043.88.68 1.321 1.104 1.321 1.274 0 .155-.132.232-.394.232h-15.643a.57.57 0 0 1-.417.325V26.55h12.885c.185-.37.409-.75.672-1.135.262-.402.44-.642.533-.719.092-.077.177-.116.255-.116.201 0 .703.371 1.506 1.113.803.726 1.205 1.205 1.205 1.437 0 .123-.139.185-.417.185h-16.57l-.417.556c-.139.201-.278.301-.417.301-.201 0-.688-.193-1.46-.579-.757-.386-1.136-.649-1.136-.788 0-.062.078-.17.232-.324.155-.155.263-.317.324-.487.078-.185.116-.471.116-.857V9.633c0-.65-.023-1.306-.069-1.97 1.22.324 2.194.695 2.92 1.112Zm10.822 4.635h1.298c.51-1.066.881-1.599 1.113-1.599.231 0 .726.301 1.483.904.772.603 1.158 1.02 1.158 1.251 0 .14-.154.209-.463.209h-4.589v2.85h.858c.541-1.127.919-1.691 1.135-1.691.232 0 .734.332 1.507.996.788.65 1.182 1.059 1.182 1.229 0 .154-.155.231-.464.231h-4.218v3.106h1.53c.525-1.175.927-1.762 1.205-1.762.216 0 .726.332 1.53.997.803.649 1.205 1.066 1.205 1.251 0 .186-.147.278-.441.278h-5.029v.997c0 .741.008 1.259.024 1.553l.023.834c0 .2-.209.402-.626.602a2.955 2.955 0 0 1-1.251.278c-.433 0-.68-.007-.742-.023-.062-.015-.093-.123-.093-.324V11.95c0-.927-.023-1.614-.069-2.062.695.046 1.344.116 1.946.208.603.093.981.186 1.136.278.154.078.232.17.232.278 0 .201-.193.356-.58.464v2.294Zm-7.161.811h-2.016c-.309 0-.587.085-.834.255l-.603-1.089c.371.046.757.07 1.159.07h2.294v-1.46c0-.773-.015-1.46-.046-2.063 1.205.046 2.032.124 2.48.232.448.092.672.24.672.44 0 .185-.186.34-.556.464v13.812a.467.467 0 0 1-.093.3c-.046.078-.201.186-.464.325a2.401 2.401 0 0 1-.811.278 6.51 6.51 0 0 1-1.043.07c-.139 0-.208-.062-.208-.185l.046-1.484c.016-.432.023-.988.023-1.668v-.858h-2.132c-.309 0-.587.085-.834.255l-.602-1.089c.37.046.757.07 1.158.07h2.41v-3.129h-1.761c-.309 0-.587.085-.834.255l-.603-1.09c.371.047.757.07 1.159.07h2.039v-2.78Z"
							fill="#FEFEFE"
						/>
					</svg>

					{/* <div className="ref-logo">民国时期的土匪</div> */}
					<div className="ref-type"></div>
				</div>
			</div>
		)
	}
	return (
		<div className="content-wrap">
			<h3 className="title">推荐资料</h3>
			<div className="reference-container">
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	)
}
