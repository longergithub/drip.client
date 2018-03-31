import Enums from "./enums";

// 加载状态
const loadingStatus = Enums
({
    loading:
    {
        value: 1
    },
    finish:
    {
        value: 2
    },
    nodata:
    {
        value: 4
    }
});

export default
{
    loadingStatus
};