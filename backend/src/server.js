import java.util.*;

public class EqualStackSumGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        int[] s1 = new int[n1];
        for (int i = 0; i < n1; i++) s1[i] = sc.nextInt();

        int n2 = sc.nextInt();
        int[] s2 = new int[n2];
        for (int i = 0; i < n2; i++) s2[i] = sc.nextInt();

        int n3 = sc.nextInt();
        int[] s3 = new int[n3];
        for (int i = 0; i < n3; i++) s3[i] = sc.nextInt();

        sc.close();

        System.out.println(maxEqualSum(s1, s2, s3));
    }

    private static int maxEqualSum(int[] s1, int[] s2, int[] s3) {
        Set<Integer> sums1 = computeStackSums(s1);
        Set<Integer> sums2 = computeStackSums(s2);
        Set<Integer> sums3 = computeStackSums(s3);

        // Keep only sums common to all three sets
        sums1.retainAll(sums2);
        sums1.retainAll(sums3);

        if (sums1.isEmpty()) return 0;

        // Maximum common sum
        return Collections.max(sums1);
    }

    private static Set<Integer> computeStackSums(int[] stack) {
        Set<Integer> sums = new HashSet<>();
        int sum = 0;

        // Start from bottom to top
        for (int i = stack.length - 1; i >= 0; i--) {
            sum += stack[i];
            sums.add(sum);
        }

        return sums;
    }
}
