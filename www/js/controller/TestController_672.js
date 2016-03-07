module.exports= function($scope, $state, TestService){
		console.log('enter controller_672')
		$scope.test = TestService.getTest()
	}
