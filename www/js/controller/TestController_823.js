module.exports= function($scope, $state, TestService){
		console.log('enter controller_823')
		$scope.test = TestService.getTest()
	}
