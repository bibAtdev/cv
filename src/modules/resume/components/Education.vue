<template>
    <item title="Education">
        <div>
            <SubItem title="K. N. Toosi University of Technology">
                <b>Artificial Intelligence</b> - Master's degree<br>
                <small>2017-2019</small>
            </SubItem>

            <SubItem title="Payame Noor University">
                <b>Computer Software Engineering</b> - Bachelor’s Degree<br>
                <small>2012-2016</small>
            </SubItem>
        </div>

    </item>
</template>
<script>
import Item from "@/modules/resume/components/Item"
import SubItem from "@/modules/resume/components/SubItem"

export default {
    name: 'Education-Component',
    components: {Item, SubItem}
}
</script>
