

// ==================== [ MODAL CONFIGURATION ]================
$(document).ready(function () {

	// Config for modal to alert user in case of error
	$("div#alert-upload-modal").modal({
		backdrop: "static",
		keyboard: false,
		show: false
	});

});

// ==================== [ LOAD CANVAS ]========================

$(document).ready(function () {

	// LOAD IMAGE INTO CANVAS

	const __loadImageIntoCanvas = () => {

		// use JQuery to get it fast and use '[0]' to get DOM version1
		const selectedImg = $("input#selected-file")[0];

		const userSimpleImg = new SimpleImage(selectedImg);

		const canvas = $("canvas#image-canvas")[0];
		userSimpleImg.drawTo(canvas);
	};

	// Change the canvas's 'title' to reflect new file
	// when a new file has been selected.

	$("input#selected-file").on("change", function () {

		const data = $(this).val().trim();
		const dataSeg = data.split("\\");
		const filename = dataSeg[dataSeg.length-1];
		// console.log("Selected filename:", filename, "Segments:", dataSeg);

		// Reveal the name of selected file to the user of the application
		$("div#image-title").html(`
						<div class="alert alert-info container">
							<span class="font-weight-bold">${filename}</span>
						</div>
					`).show();

		// Draw the image inside the Canvas
		__loadImageIntoCanvas();

		// Show button to clear canvas, so the user can remove chosen image.
		$("button#clear-canvas-btn").show();
	});
});

// ================== [UPLOAD BUTTON LOGIC] =====================

$(document).ready(function () {

	// Button to upload image to server
	$("button#uploadBtn").on("click", function (evt) {

		evt.preventDefault();

		// we check to see if the user has selected a file to upload to the
		// server.
		if ($("input#selected-file").val().length === 0) {
			$("div#alert-upload-modal-header h5").text("Please select a file to upload");
			$("div#alert-upload-modal").modal("show");
		} else {

			// Disable buttons while performing upload.

			$("button#uploadBtn").attr("disabled", "disabled");
			$("input#selected-file").attr("disabled", "disabled");
			$("button#clear-canvas-btn").attr("disabled", "disabled");

			// Show the loading bouncers animation to reveal an 'operation'
			// under execution

			$("div#main-spinner").show();

			// Now we can upload the selected image
			const formSerializedData = $("form#user-file-form").serialize();

			// Upload the data to the server
			$.post("/img_upload", formSerializedData, function (...params) {

				// Hide animation bouncer since the operation has been completed.

				$("div#main-spinner").hide();

				// Enable buttons once the request has been made
				// with or without success.

				$("button#uploadBtn").removeAttr("disabled");
				$("input#selected-file").removeAttr("disabled");
				$("button#clear-canvas-btn").removeAttr("disabled", "");

			});
		}


	});

});

$(document).ready(function () {

	// ==============[ CANVAS SECTION SETTINGS ]===============

	// Hide loading feature.
	$("div#main-spinner").hide();

	const CANVAS__DEFAULT_COLOR = "#e3e0e0";

	$("canvas#image-canvas").css({
		width: "100%",
		height: 300,
		backgroundColor: CANVAS__DEFAULT_COLOR,
		borderRadius: "8px"
	});

	// Remove the clear canvas button for the image.
	$("button#clear-canvas-btn").hide();

	// No selected file by default when the page just loads.

	$("input#selected-file").val("");


	// ==============[ CLEAR CANVAS HANDLER ]===========================

	// Button to clear the image in the canvas
	$("button#clear-canvas-btn").on("click", function () {
		const imageCanvas = $("canvas#image-canvas")[0];

		// Clear the image from the canvas
		__clearCanvas(imageCanvas, 0, 0, imageCanvas.width, imageCanvas.height);

		// Reset the selected file from input field
		$("input#selected-file").val("");

		// Hide the 'clear' button since there is no longer an image in canvas.
		$(this).hide();

		// Reset the name of file chosen above the canvas
		$("div#image-title").html(`
						<div class="alert alert-warning container">
							<span class="font-weight-bold">
								No image selected.
							</span>
						</div>
					`);

	});


	const __clearCanvas = (targetCanvas, startX, startY, widthLen, heightLen)  => {
		let mainCtx = targetCanvas.getContext("2d");
		mainCtx.fillStyle = CANVAS__DEFAULT_COLOR;
		mainCtx.clearRect(startX, startY, widthLen, heightLen);
	};



});
