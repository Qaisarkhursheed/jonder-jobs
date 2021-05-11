<template>
  <div>
    <UserOverview />
    <jonder-map />
  </div>
</template>

<script>

// User route and view will be moved to more meaningfull 
// path (company-dashboard/search/user or something) 

import UserOverview from "@/components/company/UserOverview";
import JonderMap from "@/components/parts/JonderMap";

export default {
  name: "SearchUser",
  components: {
    JonderMap,
    UserOverview
  }
};
</script>