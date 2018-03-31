import Vue from "vue";

Vue.filter("CommonStringFilter", (value) =>
{
    return value || "一";
});