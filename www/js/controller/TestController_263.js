module.exports= function($scope, $state, TestService){
		console.log('enter controller_263')
		$scope.test = TestService.getTest()
	}
