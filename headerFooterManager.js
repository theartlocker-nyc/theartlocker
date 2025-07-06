class SpecialHeader extends HTMLElement{
	 connectedCallback() {
	 	this.innerHTML = `
		 	<p style="display: flex; justify-content: space-around; padding: 10px;">
		 		<a href="index.html">Home</a>
		 	</p>
		 	`
	 }
}

class SpecialHeader extends HTMLElement{
	 connectedCallback() {
	 	this.innerHTML = `
		 	<p style="display: flex; justify-content: space-around; padding: 10px;">
		 	</p>
		 	`
	 }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)