/**
 * Copy helper shared by every copyable thing on the site.
 *
 * navigator.clipboard only exists in a secure context, so it is missing when
 * the site is opened over plain http (a LAN IP during dev, for instance) and
 * can reject in a few browser/desktop combinations. Both cases fall back to a
 * hidden textarea + execCommand, and the caller is told whether it worked.
 */
export async function copyText(text: string): Promise<boolean> {
	if (navigator.clipboard?.writeText) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// fall through to the legacy path
		}
	}

	try {
		const area = document.createElement("textarea");
		area.value = text;
		area.setAttribute("readonly", "");
		area.style.position = "fixed";
		area.style.top = "0";
		area.style.left = "-9999px";

		document.body.append(area);
		area.select();
		area.setSelectionRange(0, text.length);

		const copied = document.execCommand("copy");
		area.remove();
		return copied;
	} catch {
		return false;
	}
}

/** Wires every element matching `selector` to copy its `data-copy` value.
 *
 * Feedback is a `is-copied` / `is-failed` class on the element, plus the text
 * of an optional `[data-copy-label]` child.
 */
export function wireCopy(selector: string, hold = 1000): void {
	document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
		const label = element.querySelector<HTMLElement>("[data-copy-label]");
		const idle = label?.textContent ?? "";
		let timer = 0;

		element.addEventListener("click", async (event) => {
			event.preventDefault();

			const value = element.dataset.copy;
			if (!value) return;

			const copied = await copyText(value);

			element.classList.remove("is-copied", "is-failed");
			element.classList.add(copied ? "is-copied" : "is-failed");
			if (label) label.textContent = copied ? "copied" : "press ctrl+c";

			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				element.classList.remove("is-copied", "is-failed");
				if (label) label.textContent = idle;
			}, hold);
		});
	});
}
