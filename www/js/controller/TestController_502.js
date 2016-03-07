module.exports= function($scope, $state, TestService){
		console.log('enter controller_502')
		$scope.test = TestService.getTest()
	}
