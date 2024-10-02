<script lang="ts">
  import type { Knife } from "@/data/amazonKnife";

  export let knives: { [k: string]: Knife };
  export let prop: {name: string, title: string}

  let exceptions: Array<keyof Knife> = [prop.name, "name"];
  let keys = Object.keys(knives.knife1).filter(
    (k: keyof Knife) => exceptions.includes(k),
  );
</script>

<div class="flex">
  <div class="flex flex-col w-1/4 cursor-pointer">
    {#each keys as key}
      <div
        class="flex p-4 font-bold border-b-black border-b max-h-20 min-h-20 overflow-hidden items-center">
        {key === "name" ? "Name" :prop.title}
      </div>
    {/each}
  </div>
  {#each Object.values(knives) as knife}
    <div
      class="flex flex-col w-1/4 max-w-1/4 cursor-pointer hover:bg-sky-100 hover:w-3/4 transition-all transition-duration: 300ms">
      {#each keys as key}
        {@const prop = knife[key]}
        <div
          class="flex whitespace-nowrap p-4 border-b-black border-b max-h-20 min-h-20 overflow-hidden {prop.style} items-center">
          {#if prop?.type === "cell"}
            {prop.value} {prop.dimension}
          {:else}
            {prop}
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>
