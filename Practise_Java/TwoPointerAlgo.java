import java.util.Arrays;

public class TwoPointerAlgo {

    public static void main(String[] args) {
        //? Input Data
        // nums1 me 1,2,3 hai, aur 3 zero hain (jagah ke liye)
        int[] nums1 = {1, 2, 3, 0, 0, 0}; 
        int m = 3; // nums1 me kaam ke elements kitne hain
        
        int[] nums2 = {2, 5, 6};
        int n = 3; // nums2 me elements kitne hain

        //? Function Call
        merge(nums1, m, nums2, n);

        //? Output Print
        System.out.println("Final Sorted Array: " + Arrays.toString(nums1));
    }

    //! Q1. Merge Sorted Array
    //! TC: O(m + n) | SC: O(1)
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Pointers setup
        int p1 = m - 1;      // nums1 ke last valid number par (index 2)
        int p2 = n - 1;      // nums2 ke last number par (index 2)
        int pMerge = m + n - 1; // nums1 ke bilkul end par (index 5)

        // Jab tak nums2 me elements bache hain
        while (p2 >= 0) {
            
            // Agar nums1 ka element bada hai, to use end me bhejo
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[pMerge] = nums1[p1];
                p1--;
            } 
            // Nahi to nums2 ka element end me bhejo
            else {
                nums1[pMerge] = nums2[p2];
                p2--;
            }
            // Pointer ko peeche khiskao
            pMerge--;
        }
    }
}