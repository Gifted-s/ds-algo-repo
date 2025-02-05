// Just having fun with search algorithms today :) Tuesday Feb 4, 2025
use std::cmp::Ordering;
use std::time::Instant;

#[derive(Debug)]
enum SearchType {
    Linear,
    Binary,
}

fn search<T: Ord, F: Fn(&Vec<T>, T) -> bool>(
    algo: SearchType,
    set: &Vec<T>,
    search_param: T,
    f: F,
) -> bool {
    match algo {
        SearchType::Binary => search_inner(algo, set, search_param, f),
        SearchType::Linear => search_inner(algo, set, search_param, f),
    }
}

fn search_inner<T: Ord, F: Fn(&Vec<T>, T) -> bool>(
    search_type: SearchType,
    set: &Vec<T>,
    search_param: T,
    f: F,
) -> bool {
    let start = Instant::now();
    let is_found = f(set, search_param);
    let duration = start.elapsed();
    println!("=====================================");
    println!("-> {:?} Algorithm", search_type);
    println!("-> Runtime: {:?}", duration);
    is_found
}

fn binary_search<T: Ord>(set: &Vec<T>, search_param: T) -> bool {
    let mut l = 0;
    let mut r = set.len() - 1;
    while l <= r {
        let mid = (l + r) / 2;
        match search_param.cmp(&set[mid]) {
            Ordering::Equal => return true,
            Ordering::Greater => l = mid + 1,
            Ordering::Less => r = mid - 1,
        }
    }
    false
}

fn linear_search<T: Ord>(set: &Vec<T>, search_param: T) -> bool {
    for item in set {
        if *item == search_param {
            return true;
        }
    }
    false
}

fn main() {
    let sample: Vec<i64> = (0..845459489).collect();

    println!("                                           ");
    // Linear scan is faster than Binary scan in this case :)
    let _b_response = search(SearchType::Binary, &sample, 10, binary_search);
    let _l_response = search(SearchType::Linear, &sample, 10, linear_search);
    println!("                                           ");
    // Binary scan is faster than Linear scan in this case :)
    let _b_response = search(SearchType::Binary, &sample, 545459489, binary_search);
    let _l_response = search(SearchType::Linear, &sample, 545459489, linear_search);
    println!("                                           ");
    // Binary scan is faster than Linear scan in this case :)
    let _b_response = search(SearchType::Binary, &sample, 78459489, binary_search);
    let _l_response = search(SearchType::Linear, &sample, 78459489, linear_search);

    //     OUTPUT 1
    //     =====================================
    //     -> Binary Algorithm
    //     -> Runtime: 197.708µs
    //     =====================================
    //     -> Linear Algorithm
    //     -> Runtime: 458ns

    //     OUTPUT 2
    //     =====================================
    //     -> Binary Algorithm
    //     -> Runtime: 480.083µs
    //     =====================================
    //     -> Linear Algorithm
    //     -> Runtime: 7.041808417s

    //    OUTPUT 3
    //     =====================================
    //     -> Binary Algorithm
    //     -> Runtime: 127.667µs
    //     =====================================
    //     -> Linear Algorithm
    //     -> Runtime: 1.043443125s
}