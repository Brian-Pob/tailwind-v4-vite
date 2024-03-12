<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";

  export let items: any;
</script>

<Accordion.Root class="w-full min-w-full bg-white rounded-lg shadow-xl">
  <h2 class="p-8 inline-block font-bold text-5xl">FAQs</h2>
  {#each items as item, i}
    <Accordion.Item value={"faqitem" + i}>
      <Accordion.Trigger class="p-8 font-semibold text-lg text-start text-balance"
        >{item.question}</Accordion.Trigger
      >
      <Accordion.Content
        class="px-8 py-2 text-base text-accordion-brand-text-2"
      >
        {item.answer}
      </Accordion.Content>
      {#if i < items.length - 1}
        <hr class="w-[90%] mx-auto border-accordion-brand-surface-1" />
      {/if}
    </Accordion.Item>
  {/each}
</Accordion.Root>

<style>
  h2::before {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQwIDQxIj48cGF0aCBmaWxsPSIjQUQyOEVCIiBkPSJNMzcuNSAyMC41YTIuNDY3IDIuNDY3IDAgMCAxLTEuNjQgMi4zNDRsLTkuOTEzIDMuNjA0LTMuNjAzIDkuOTExYTIuNSAyLjUgMCAwIDEtNC42ODggMGwtMy42MDQtOS45MjItOS45MTEtMy41OTNhMi41IDIuNSAwIDAgMSAwLTQuNjg4bDkuOTIxLTMuNjA0IDMuNTk0LTkuOTExYTIuNSAyLjUgMCAwIDEgNC42ODggMGwzLjYwNCA5LjkyMSA5LjkxMSAzLjU5NEEyLjQ2NyAyLjQ2NyAwIDAgMSAzNy41IDIwLjVaIi8+PC9zdmc+");
    display: inline;
    margin-right: 1rem;
  }
</style>
