export default (arr = [], startIndex, endIndex) => {
    const start = startIndex;
    const end = endIndex;
    if (start < end) {
        for (let i = start; i <= end; i++) {
            const j = i + 1;
            if (j <= end) {
                const copy = arr[i];
                arr[i] = arr[j]
                arr[j] = copy;
            }
        }
    }
    if(start > end){
        for (let i = start; i >= end; i--) {
            const j = i - 1;
            if (j >= end) {
                const copy = arr[i];
                arr[i] = arr[j]
                arr[j] = copy;
            }
        }
    }

}