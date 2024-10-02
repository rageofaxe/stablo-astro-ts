<script lang="ts">
  import type { Knife } from "@/data/amazonKnife";

  export let knives: { [k: string]: Knife };
  export let prop: {name: string, title: string}

  let exceptions: Array<keyof Knife> = ["bladeSteel", "name"];
  let keys = Object.keys(knives.knife1).filter(
    (k: keyof Knife) => exceptions.includes(k),
  );
</script>

<div class="table">
  {#each keys as key}
    <div class="table-row cursor-pointer hover:bg-sky-100">
      <div class="table-cell p-4 capitalize align-middle font-bold">
        {key}
      </div>
      {#each Object.values(knives) as knife}
        {@const prop = knife[key]}
        <div class="table-cell p-4 align-middle {prop.style} text-center">
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
