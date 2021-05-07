<template>
  <UserOverview />
</template>

<script>

// User route and view will be moved to more meaningfull 
// path (company-dashboard/search/user or something) 

import UserOverview from '@/components/company/UserOverview';

export default {
  name: 'SearchUser',
  components: {
    UserOverview
  }
};
</script>