module.exports= function($scope, $state, TestService){
		console.log('enter controller_851')
		$scope.test = TestService.getTest()
	}
