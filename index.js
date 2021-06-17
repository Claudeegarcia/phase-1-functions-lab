function distanceFromHqInBlocks (finalBlock){
    const headQuarter = 42
    if (finalBlock > headQuarter){
        return (finalBlock - headQuarter)
    } else {
        return (headQuarter - finalBlock)
    }
}

function distanceFromHqInFeet(finalBlock){
    const block = 264
    const headQuarter = 42
    if (finalBlock > headQuarter){
        return (finalBlock - headQuarter) * block
    } else {
        return (headQuarter - finalBlock) * block 
    }
}

function distanceTravelledInFeet(block1, block2){
    const block = 264;
    if (block1 > block2){
        return (block1 - block2) * block
    } else {
        return (block2 - block1) * block
    }
}

function calculatesFarePrice(block1, block2){
    const feet = distanceTravelledInFeet(block1, block2)
    if (feet < 400) {
        return 0
    } else if ( feet > 400 && feet < 2000){
        return ((feet - 400) * .02)
    } else if (feet < 2500) {
        return 25;
    } else (feet > 2500)
    return `cannot travel that far`
}
