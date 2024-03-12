<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js.js";

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
	export let level: AccordionPrimitive.HeaderProps["level"] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline    [&[data-state=open]>img.plus]:hidden [&[data-state=open]>img.minus]:inline-block [&[data-state=closed]>img.plus]:inline-block  [&[data-state=closed]>img.minus]:hidden  ",
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<img class="plus" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwIDMxIj48cGF0aCBmaWxsPSIjQUQyOEVCIiBkPSJNMTUgMy4zMTNBMTIuMTg3IDEyLjE4NyAwIDEgMCAyNy4xODggMTUuNSAxMi4yMDMgMTIuMjAzIDAgMCAwIDE1IDMuMzEyWm00LjY4OCAxMy4xMjRoLTMuNzV2My43NWEuOTM4LjkzOCAwIDAgMS0xLjg3NiAwdi0zLjc1aC0zLjc1YS45MzguOTM4IDAgMCAxIDAtMS44NzVoMy43NXYtMy43NWEuOTM4LjkzOCAwIDAgMSAxLjg3NiAwdjMuNzVoMy43NWEuOTM4LjkzOCAwIDAgMSAwIDEuODc2WiIvPjwvc3ZnPg==" alt=""/>
		<img class="minus" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwIDMxIj48cGF0aCBmaWxsPSIjMzAxNTM0IiBkPSJNMTUgMy4zMTNBMTIuMTg3IDEyLjE4NyAwIDEgMCAyNy4xODggMTUuNSAxMi4yIDEyLjIgMCAwIDAgMTUgMy4zMTJabTQuNjg4IDEzLjEyNGgtOS4zNzVhLjkzOC45MzggMCAwIDEgMC0xLjg3NWg5LjM3NGEuOTM4LjkzOCAwIDAgMSAwIDEuODc2WiIvPjwvc3ZnPg==" alt="">
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
