<template>
  <div>
    <ProfileInformation />
    <ProfileMap />
    <ProfileStatistic />
  </div>
</template>

<script>

import ProfileInformation from '@/components/company/ProfileInformation';
import ProfileStatistic from '@/components/company/ProfileStatistic';
import ProfileMap from '@/components/company/ProfileMap';

export default {
  name: 'CompanyProfile',

  components: {
    ProfileInformation,
    ProfileStatistic,
    ProfileMap
  }
};

</script>