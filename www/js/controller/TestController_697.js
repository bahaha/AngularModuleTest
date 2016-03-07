module.exports= function($scope, $state, TestService){
		console.log('enter controller_697')
		$scope.test = TestService.getTest()
	}
