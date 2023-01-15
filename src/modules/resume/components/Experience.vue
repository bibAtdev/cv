<template>
    <item title="Experience">
        <div>
            <SubItem title="Freelance developer" icon="fa fa-file-code">
                2016 – Present
            </SubItem>

            <SubItem title="Full-Stack developer" icon="fa fa-code">
                <b>Scientific Green Incorporation (SGI)</b> Mar 2020 – Present
                <li class="mt-1">
                    Developing apps for the inner organization usage
                </li>
            </SubItem>

            <SubItem title="R&D management" icon="fa fa-search">
                <b>ASE</b> Apr 2018 – Mar 2020
                <li class="mt-1">
                    Working on new electronic ideas, designing and building them.
                </li>
                <li>
                    Developing apps to control electronic devices with pc or mobile phones
                </li>
            </SubItem>

            <SubItem title="IT manager" icon="fa fa-network-wired">
                <b>NIACO Atlas Qeshm</b> Dec 2016 – Mar 2018
                <li class="mt-1">
                    Managed network systems, ESXi servers, and PCoIP clients.
                </li>

            </SubItem>
        </div>
    </item>
    
    <div>
        <div class="container-chart text-align-left">
        <div class="chart"></div>
        </div>
    </div>

</template>
<script>
import Item from "@/modules/resume/components/Item"
import SubItem from "@/modules/resume/components/SubItem"
import * as d3 from 'd3'

import { mapGetters } from 'vuex'

export default {
    name: 'Experience-Component',
    components: {Item, SubItem},
    watch: {
        mainColor: {
            handler() {this.updateChart();}
        }
    },
    data () {
        return {}
    },
    computed: {
        ...mapGetters(['mainColor'])
    },
    mounted () {

        this.plot()
        
        //.style("background-color", store.getters.mainColor)
               
    },
    methods:{
        plot(){
            console.log("start plotting...")

            let data = [4, 8, 15, 16, 23, 42]

            //d3.select('.chart').remove()


            d3.select('.chart')
                .selectAll('div')
                .data(data)
                .enter().append('div'); //plot chart  
        },
        updateChart(){
            //ToDo: transition() manipulates the DOM tree not fast enought, so that refresh works only if clicked ever 5sec
            console.log("start updating chat with:" +  this.mainColor)

            d3.select('.chart')
                .selectAll('div')
                .style('width', function (d) { return d * 10 + 'px' })
                .style("background-color", this.mainColor)
                .text(function (d) { return d })
                .transition()
        }
    }
}
</script>

<style scoped>
</style>

<style>
.chart div {
  font: 10px sans-serif;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
.container-chart {
  /* width: 50%; */
  margin: auto;
}
</style>