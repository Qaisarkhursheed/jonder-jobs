<template>
  <div class="admin-cms">
    <PageHeader title="CMS" />
    <div class="cms-wrap pt-8">
      <div class="row">
        <v-col cols="6" v-for="(item, i) in cms_sections" :key="i" >
          <CMSTable 
            :type="item.type"
            :list="item.items"
          />
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";
import CMSTable from "@/components/admin/CMSTable";
// Employement type, Job branche, Job position, Salary range, Work experience, 
// Employee number
// 
export default {

  name: "AdminCMS",

  components: {
    PageHeader,
    CMSTable
  },

  data() {
    return {
      cms_sections: [
        {
          type: "Employement type",
          items: [
            {
              id: 1,
              key: "Full time",
            },
            {
              id: 2,
              key: "Part time",
            },
            {
              id: 3,
              key: "Minijob",
            },
            {
              id: 4,
              key: "Midijob",
            },
            {
              id: 5,
              key: "Working student",
            },
            {
              id: 6,
              key: "Short term",
            },
          ]
        },
        {
          type: "Job branches",
          items: [
            {
              id: 1,
              key: "IT",
            },
            {
              id: 2,
              key: "Health",
            },
            {
              id: 3,
              key: "Architecture",
            },
            {
              id: 4,
              key: "Media",
            },
            {
              id: 5,
              key: "Nature",
            },
            {
              id: 6,
              key: "Mechanics",
            },
          ]
        },
        {
          type: "Job postions",
          items: [
            {
              id: 1,
              key: "Project Manager",
            },
            {
              id: 2,
              key: "Developer",
            },
            {
              id: 3,
              key: "Acrhitect",
            },
            {
              id: 4,
              key: "Frontend developer",
            },
            {
              id: 5,
              key: "Backend developer",
            },
            {
              id: 6,
              key: "Mobile developer",
            },
          ]
        },
        {
          type: "Salary range",
          items: [
            {
              id: 1,
              key: "20000 - 30000",
            },
            {
              id: 2,
              key: "30000 - 50000",
            },
            {
              id: 3,
              key: "50000 - 70000",
            },
            {
              id: 4,
              key: "70000 - 90000",
            },
            {
              id: 5,
              key: "90000 - 110000",
            },
            {
              id: 6,
              key: "110000 - 130000",
            },
          ]
        },
        {
          type: "Employee number",
          items: [
            {
              id: 1,
              key: "0 bis 1 Beschäftigte",
            },
            {
              id: 2,
              key: "2 bis 10 Beschäftigte",
            },
            {
              id: 3,
              key: "11 bis 50 Beschäftigte",
            },
            {
              id: 4,
              key: "51 bis 200 Beschäftigte",
            },
            {
              id: 5,
              key: "201 bis 500 Beschäftigte",
            },
            {
              id: 6,
              key: "501 bis 1.000 Beschäftigte",
            },
          ]
        },
        {
          type: "Employee number",
          items: [
            {
              id: 1,
              key: "0 bis 1 Beschäftigte",
            },
            {
              id: 2,
              key: "2 bis 10 Beschäftigte",
            },
            {
              id: 3,
              key: "11 bis 50 Beschäftigte",
            },
            {
              id: 4,
              key: "51 bis 200 Beschäftigte",
            },
            {
              id: 5,
              key: "201 bis 500 Beschäftigte",
            },
            {
              id: 6,
              key: "501 bis 1.000 Beschäftigte",
            },
          ]
        },
      ]
    };
  },
  
};
</script>