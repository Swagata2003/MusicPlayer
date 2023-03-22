#include<stdio.h>
#include<stdlib.h>
void swap(int *x,int *y){
	int temp;
	temp=*x;
	*x=*y;
	*y=temp;
}
int partition(int A[],int l,int h){
	int pivot=A[l];
	int i,j;
	i=l;j=h;
	do{
		do{i++;}while(A[i]<=pivot);
		do{j++;}while(A[i]>pivot);
		if(i<j){
			swap(&A[i],&A[j]);
		}
	}while(i<j);
	swap(&A[l],&A[j]);
	return j;
}
void quicksort(int A[],int l,int h){
	int j;
	if(l<h){
		j=partition(A,l,h);
 		quickSort(A,l,j);
 		quickSort(A,j+1,h);
	}
}
int main(){
	int n;
	printf("Enter the size eof the array:");
	scanf("%d",&n);
	int i;
	int A[n];
	for(i=0;i<n;i++){
		scanf("%d",&A[i]);
	}
	printf("The sorted list is\n");
	quicksort(A,0,n-1);
	for(i=0;i<n;i++){
		printf("%d ",A[i]);
	}
	return 0;
}