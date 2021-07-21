<template>
  <div class="packages">
    <v-row>
      <v-col 
        cols="12"
        md="6"
        lg="4"
        v-for="(item, i) in packages" :key="i">
        <PackagesPackage :plan="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import PackagesPackage from '@/components/PackagesPlan';

export default {
  name: 'Packages',

  components: {
    PackagesPackage,
  },

  data() {
    return {
      packages: [
        {
          type: 'Basic License',
          price: '$39',
          description: `Our goverment backed plan designed to 
            keep your business legaly and secure`,
          features: [
            'Secure your customer usage',
            'View basic analytics',
            'Up to 350 customer profiles',
            'Custom network name'
          ],
          color: '#F3B10E'
        },
        {
          type: 'Social License',
          price: '$55',
          description: `Unlimited analytics, plans, demographic insights. 
            All you need to grow-up your business`,
          features: [
            'Add your own branding',
            'View popularity analytics',
            'Up to 1500 customer profiles',
            'View demographic insights'
          ],
          color: '#1DABF2'
        },
        {
          type: 'Marketing License',
          price: '$99',
          description: `Unlock powerfull time-saving tools for creating 
            email delivery and collecting marketing data`,
          features: [
            'Collect marketing data',
            'Design your emails',
            'Email campaigns & interactions',
            'View your customer’s profiles'
          ],
          color: '#0253B3'
        }
      ]
    }
  }
};

</script>