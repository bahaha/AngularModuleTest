module.exports= function($scope, $state, TestService){
		console.log('enter controller_361')
		$scope.test = TestService.getTest()
	}
