<template>
    <v-container
        class="pa-0 position-fixed"
        style="z-index: 2"
        :class="{ 'base-header-shadow': height < 600 }"
        :style="{ height: height + 'px' }"
        fluid
    >
        <v-row class="ma-0 position-relative">
            <v-col
                class="base-content-container"
                :class="{ 'base-content-container-responsive': height >= 200 }"
            >
                <base-header-content
                    :height="height"
                    @clickFilterButton="clickFilterButton"
                    @searchRecipes="searchRecipes"
                />
            </v-col>
            <v-col
                class="image-container"
                :style="{ height: height + 'px'  }"
                v-show="height > 200"
            >
                <base-header-image/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import BaseHeaderContent from "@/components/BaseHeader/BaseHeaderContent"
    import BaseHeaderImage from "@/components/BaseHeader/BaseHeaderImage"
    import { defineProps, defineEmits } from "vue"

    defineProps({
        height: Number
    })

    const emits = defineEmits(['clickFilterButton', 'searchRecipes'])

    function clickFilterButton() {
        emits('clickFilterButton')
    }

    function searchRecipes(searchLine) {
        emits('searchRecipes', searchLine)
    }
</script>

<style lang="scss" scoped>
    .base-header-shadow {
        box-shadow: 0px 3px 8px -3px $shade20;
    }

    .base-content-container {
        background-color: $base1;
        padding: 0;
        z-index: 3;
    }

    .base-content-container-responsive {
      max-width: 30%;

      @media(max-width: 1400px) {
        max-width: 40%;
      }

      @media(max-width: 1080px) {
        max-width: 50%;
      }

      @media (max-width: 948px) {
        max-width: 100%;
      }
    }

    .image-container {
        padding: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>