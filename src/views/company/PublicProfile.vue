<template>
  <div>
    <ProfileInformation class="mb-10"/>
    <ProfileMap class="mb-10"/>
    <ProfileStatistic />
  </div>
</template>

<script>

import ProfileInformation from '@/components/company/ProfileInformation';
import ProfileStatistic from '@/components/company/ProfileStatistic';
import ProfileMap from '@/components/company/ProfileMap';

export default {
  name: 'CompanyPublicProfile',

  components: {
    ProfileInformation,
    ProfileStatistic,
    ProfileMap
  }
};

</script>