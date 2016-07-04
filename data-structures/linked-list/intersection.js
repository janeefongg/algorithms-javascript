//given two singly linked lists, determine if the two lists intersect. return intersecting node.
//note: by reference, not by value

//iterate through each linked list to get the lengths and tails
//compare the tails, if they are different (by reference), return -> no intersection
//on longer linked list, move its pointers to the difference in lengths
//traverse each list until pointers are the same (so that they meet up at the same point)