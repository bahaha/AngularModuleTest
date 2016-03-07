module.exports= function($scope, $state, TestService){
		console.log('enter controller_39')
		$scope.test = TestService.getTest()
	}
