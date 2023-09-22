<!-- <template>
    <div class="flex items-center space-x-2">
    <div class="bg-white shadow-md rounded-lg p-5 w-72 h-32">
      <div class="flex items-center justify-between">
        <div class="text-base font-medium">Total Revenue</div>
        <img src="@/assets/img/dollar-linear.svg" alt="Dollar Icon" class="w-6 h-6 ml-2" />
      </div>
      <div class="text-2xl font-semibold mt-3">$45,231.89</div>
      <div class="text-sm font-normal mt-1">+20.1% from last month</div>
    </div>

    <div class="bg-white shadow-md rounded-lg p-5 w-72 h-32">
      <div class="flex items-center justify-between">
        <div class="text-base font-medium">Transactions</div>
        <img src="@/assets/img/hand-coins-light.svg" alt="hand coins" class="w-6 h-6 ml-2" />
      </div>
      <div class="text-2xl font-semibold mt-3">+2350</div>
      <div class="text-sm font-normal mt-1">+180.1% from last month</div>
    </div>

    <div class="bg-white shadow-md rounded-lg p-5 w-72 h-32">
      <div class="flex items-center justify-between">
        <div class="text-base font-medium">Categories</div>
        <img src="@/assets/img/category.svg" alt="hand coins" class="w-6 h-6 ml-2" />
      </div>
      <div class="text-2xl font-semibold mt-3">142</div>
      <div class="text-sm font-normal mt-1">+19% from last month</div>
    </div>

    <div class="bg-white shadow-md rounded-lg p-5 w-72 h-32">
      <div class="flex items-center justify-between">
        <div class="text-base font-medium">Cancelled</div>
        <img src="@/assets/img/cancel-bold.svg" alt="hand coins" class="w-6 h-6 ml-2" />
      </div>
      <div class="text-2xl font-semibold mt-3">2</div>
      <div class="text-sm font-normal mt-1">++0,0002% since last hour</div>
    </div>
</div>
  </template>
   -->

   <template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">

        <VCard class="w-72">
          <div class="flex justify-between">
        <h1 class="text-base font-medium">Total Revenue</h1>
        <img src="@/assets/img/dollar-linear.svg" alt="Total Revenue Image">
      </div>
      <!-- body -->
      <p class="text-2xl font-semibold mt-3">$45,231.89</p>

      <!-- footer slot -->
      <template #footer>
        <div class="text-sm font-normal">+20.1% from last month</div>
      </template>
    </VCard>

    <VCard class="w-72">
      <div class="flex justify-between">
        <h1 class="text-base font-medium">Transactions</h1>
        <img src="@/assets/img/hand-coins-light.svg" alt="Total Revenue Image">
      </div>
      <!-- body -->
      <p class="text-2xl font-semibold mt-3">+2350</p>

      <!-- footer slot -->
      <template #footer>
        <div class="text-sm font-normal">+180.1% from last month</div>
      </template>
    </VCard>

    <VCard class="w-72">
      <div class="flex justify-between">
        <h1 class="text-base font-medium">Categories</h1>
        <img src="@/assets/img/category.svg" alt="Total Revenue Image">
      </div>
      <!-- body -->
      <p class="text-2xl font-semibold mt-3">142</p>

      <!-- footer slot -->
      <template #footer>
        <div class="text-sm font-normal">+19% from last month</div>
      </template>
    </VCard>

    <VCard class="w-72">
      <div class="flex justify-between">
        <h1 class="text-base font-medium">Cancelled</h1>
        <img src="@/assets/img/cancel-bold.svg" alt="Total Revenue Image">
      </div>
      <!-- body -->
      <p class="text-2xl font-semibold mt-3">2</p>

      <!-- footer slot -->
      <template #footer>
        <div class="text-sm font-normal">++0,0002% since last hour</div>
      </template>
    </VCard>

</div>

  </template>