<template>
    <div id="resume-div" class="container-fluid container-lg">
        <div class="row">
            <div class="col-sm-6 col-md-5 col-xl-4 d-flex flex-column p-4 bg-grey lighten-8">
                <div class="d-flex justify-content-center mt-4 ">
                    <User/>
                </div>
                <Contact class="mt-5"/>
                <Skills class="mt-5"/>
                <Languages class="mt-5 mb-5"/>
            </div>
            <div class="col-sm-6 col-md-7 container p-4 ">
                <About class="mt-5"/>
                <Experience class="mt-5"/>
                <Education class="mt-5"/>
                <Licenses class="mt-5"/>
            </div>

            <div class="d-none d-xl-flex flex-column align-items-center col-xl-1 bg-grey lighten-8 position-relative">
                <div :class="'bg-'+$store.getters.mainColor" class="position-absolute h-100 start-0 lighten-8" style="width: 5px"></div>
                <ResumeDownload class="mt-4"/>
                <ShuffleColor class="mt-2"/>
            </div>
        </div>

    </div>

</template>

<script>

import User from "@/modules/resume/components/User";
import Contact from "@/modules/resume/components/Contact";
import Education from "@/modules/resume/components/Education";
import Experience from "@/modules/resume/components/Experience";
import Skills from "@/modules/resume/components/Skills";
import Licenses from "@/modules/resume/components/Licenses";
import About from "@/modules/resume/components/About";
import Languages from "@/modules/resume/components/Languages";
import ResumeDownload from "@/modules/resume/components/ResumeDownload";
import ShuffleColor from "@/modules/resume/components/ShuffleColor";

export default {
    name: 'Resume-View',
    components: {
        ShuffleColor,
        ResumeDownload,
        Languages,
        About,
        Licenses,
        Skills,
        Experience,
        Education,
        Contact,
        User,
    },
    data: function () {
        return {
        }
    },
    mounted() {
    },
    methods :{

    }
}

</script>

<style>
.no-float {
    height: 100%;
}

</style>

