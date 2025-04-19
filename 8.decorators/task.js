//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const t = cache.find(item => cache.length !=0 && item.hash === hash);
    if (t) {
        const result = t.result;
        console.log("Из кеша: " + result);
        return "Из кеша: " + result;
    }
    if (cache.length === 5) {
        cache.shift(1);
    }
    const result = func(...args)
    cache.push({hash: hash, result: result})
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
        wrapper.allCount++;
        const callFn = () => {
            
            wrapper.count++;
            func(...args);
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
            debugger
        } else {
            callFn();
            debugger 
        }
        debugger
        timeoutId = setTimeout(callFn, delay);
        debugger
    }
  
    return wrapper;
}
