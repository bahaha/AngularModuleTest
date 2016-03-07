module.exports= function($scope, $state, TestService){
		console.log('enter controller_582')
		$scope.test = TestService.getTest()
	}
